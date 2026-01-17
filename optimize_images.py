import os
import shutil
from PIL import Image
import glob

# Configuration
TARGET_EXTS = {'.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'}
MAX_WIDTH = 1920
QUALITY = 80
BACKUP_DIR = '_backup'
SEARCH_DIRS = ['src', 'public']
CODE_EXTS = {'.tsx', '.ts', '.jsx', '.js', '.css', '.html', '.json'}

def optimize_image(filepath):
    """
    Converts image to WebP, resizes if needed, and moves original to backup.
    Returns tuple (original_path, new_path) if successful, else None.
    """
    try:
        filename = os.path.basename(filepath)
        name, ext = os.path.splitext(filename)
        
        # Skip if already webp
        if ext.lower() == '.webp':
            return None

        # Create backup
        backup_path = os.path.join(BACKUP_DIR, os.path.relpath(filepath))
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        shutil.copy2(filepath, backup_path)

        with Image.open(filepath) as img:
            # Resize if needed
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / img.width
                new_height = int(img.height * ratio)
                img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {filename} to {MAX_WIDTH}px width")

            # Save as WebP
            new_filename = f"{name}.webp"
            new_filepath = os.path.join(os.path.dirname(filepath), new_filename)
            
            img.save(new_filepath, 'WEBP', quality=QUALITY)
            print(f"Converted {filename} -> {new_filename}")

        # Remove original (it's backed up)
        os.remove(filepath)
        
        return filepath, new_filepath

    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return None

def update_references(original_path, new_path):
    """
    Updates references to the image in the codebase.
    """
    original_name = os.path.basename(original_path)
    new_name = os.path.basename(new_path)
    
    # Files to search in
    files_to_check = []
    for root, _, files in os.walk('.'):
        if 'node_modules' in root or '.git' in root or 'dist' in root or '_backup' in root:
            continue
        for file in files:
            if os.path.splitext(file)[1] in CODE_EXTS:
                files_to_check.append(os.path.join(root, file))

    count = 0
    for file_path in files_to_check:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple string replacement - risky but generally works for filenames
            # We check for exact filename match to avoid partial matches
            if original_name in content:
                new_content = content.replace(original_name, new_name)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                print(f"Updated reference in {file_path}")
                
        except Exception as e:
            print(f"Could not check {file_path}: {e}")
            
    return count

def main():
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)

    processed_files = []
    
    # Scan directories
    for search_dir in SEARCH_DIRS:
        if not os.path.exists(search_dir):
            continue
            
        for root, _, files in os.walk(search_dir):
            for file in files:
                ext = os.path.splitext(file)[1]
                if ext in TARGET_EXTS:
                    filepath = os.path.join(root, file)
                    result = optimize_image(filepath)
                    if result:
                        processed_files.append(result)

    print(f"\nProcessed {len(processed_files)} images.")
    
    # Update references
    if processed_files:
        print("\nUpdating code references...")
        for old_path, new_path in processed_files:
            update_references(old_path, new_path)

if __name__ == "__main__":
    main()

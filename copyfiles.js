const fs = require('fs');
const path = require('path');

// Path to the source directory within your package
const sourceDir = path.join(__dirname, 'dist', 'public', 'fonts');

// Path to the source directory within your package
const sourceDir2 = path.join(__dirname, 'dist', 'public', 'img');

// Path to the target directory in the destination project
const targetDir = path.join(__dirname, '..', '..', 'public');

// Function to copy a file from source to target
function copyFileSync(source, target) {
  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

// Function to copy a folder recursively from source to target
function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Ensure the target directory exists
  fs.mkdirSync(target, { recursive: true });

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, path.join(target, file));
      } else {
        copyFileSync(curSource, path.join(target, file));
      }
    });
  }
}

// Check if the source directory exists before attempting to copy
if (fs.existsSync(sourceDir)) {
  copyFolderRecursiveSync(sourceDir, targetDir);
  console.log(`Copied files from "${sourceDir}" to "${targetDir}"`);
} else {
  console.error(`Source directory "${sourceDir}" does not exist.`);
}

// Check if the source directory exists before attempting to copy
if (fs.existsSync(sourceDir2)) {
    copyFolderRecursiveSync(sourceDir2, targetDir);
    console.log(`Copied files from "${sourceDir2}" to "${targetDir}"`);
  } else {
    console.error(`Source directory "${sourceDir2}" does not exist.`);
  }
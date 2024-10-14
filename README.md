English | [Türkçe](./README.tr.md)

# HANDBUZ-FUP (Find Unused Pictures)

HANDBUZ-FUP is a command-line tool designed to help developers identify and manage unused images in their project directories. This tool scans through your project files and detects images that are not referenced in your codebase, potentially helping to reduce clutter and optimize project size.

## Features

- Scans specified directories for image files
- Analyzes JavaScript and TypeScript files for image references
- Identifies unused images in the project
- Provides a simple command-line interface for easy use

## How It Works

1. **Image Discovery**: FUP searches the specified directory (or the current directory if none is specified) for image files.

2. **Code Analysis**: It then scans all JavaScript (.js) and TypeScript (.ts) files in the project.

3. **Reference Checking**: The tool checks if each discovered image is referenced in any of the scanned code files.

4. **Results**: FUP reports the total number of images found and lists any images that are not referenced in the code.


Example
```bash
npx handbuz-fup
npx handbuz-fup public
```

About the author
- [Handbuz](https://github.com/yasinelbuz)
- [Twitter](https://twitter.com/yasinelbuz)
- [Linkedin](https://www.linkedin.com/in/yasinelbuz/)





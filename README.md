# Commander Documentation Generator

## Description

This tool generates a markdown file containing the documentation for a given commander cli module.

## Installation

```bash
npm install -g commander-documentation-generator
```

## Documentation
# Table of Contents

 - [commander-documentation-generator](#commander-documentation-generator)
	 - [generate](#generate)
# Commander-documentation-generator 
**Description**: 
 This is a CLI to generate commander CLI documentation

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--version` | `-V` | output the version number | optional |  |
---
---
## Module: Generate <div id="generate"></div>
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--input` | `-i` | Path to config file | required |  |
| `--output` | `-o` | Path to output file | required | `./documentation.md` |

 Example: 

 
    
    commander-documentation-generator generate  --input <input> --output <output>
    

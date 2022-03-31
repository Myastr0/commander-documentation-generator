# Table of Contents

 - [commander-cli-documentation-generator](#commander-cli-documentation-generator)
	 - [generate](#generate)
# Commander-cli-documentation-generator 
**Description**: 
 This is a CLI to generate commander CLI documentation 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--version` | `-V` | output the version number | required |  |
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

 
    
    commander-cli-documentation-generator generate  --input <input> --output <output>
    
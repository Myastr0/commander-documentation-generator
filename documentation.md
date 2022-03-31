# Table of Contents

 - [kingdom](#kingdom)
	 - [cli](#cli)
		 - [configure](#configure)
		 - [reconfigure](#reconfigure)
		 - [ascii-art](#ascii-art)
	 - [analytics](#analytics)
		 - [start](#start)
		 - [stop](#stop)
	 - [core](#core)
		 - [start](#start)
		 - [stop](#stop)
		 - [purge](#purge)
		 - [configure](#configure)
		 - [reconfigure](#reconfigure)
	 - [infra](#infra)
		 - [mount](#mount)
		 - [start](#start)
		 - [unmount](#unmount)
		 - [stop](#stop)
		 - [refresh](#refresh)
		 - [pull](#pull)
		 - [restart](#restart)
		 - [prune](#prune)
		 - [purge](#purge)
		 - [list](#list)
		 - [configure](#configure)
		 - [compose:up](#compose:up)
		 - [environment](#environment)
			 - [list](#list)
			 - [create](#create)
			 - [import](#import)
			 - [export](#export)
			 - [remove](#remove)
	 - [dashboard](#dashboard)
		 - [configure](#configure)
		 - [start](#start)
		 - [stop](#stop)
	 - [jwt](#jwt)
		 - [generate](#generate)
		 - [add-secret](#add-secret)
		 - [environment](#environment)
			 - [list](#list)
			 - [create](#create)
			 - [import](#import)
			 - [export](#export)
			 - [remove](#remove)
	 - [postgres](#postgres)
		 - [start](#start)
		 - [stop](#stop)
		 - [dump](#dump)
		 - [restore](#restore)
		 - [anonymize](#anonymize)
		 - [clear](#clear)
		 - [restart](#restart)
		 - [status](#status)
		 - [environment](#environment)
			 - [list](#list)
			 - [create](#create)
			 - [import](#import)
			 - [export](#export)
			 - [remove](#remove)
	 - [project-manager](#project-manager)
		 - [create](#create)
		 - [list](#list)
	 - [version-manager](#version-manager)
		 - [update](#update)
		 - [use](#use)
		 - [pull](#pull)
		 - [list](#list)
# Kingdom 
**Description**: 
 🏰 Kingdom is a CLI to interact with many apps of bleexo architecture

Alias: `kd`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--version` | `-v` | output the current version | optional |  |
---
---
## Module: Cli <div id="cli"></div>
**Description**: 
 ⌨️ Kingdom CLI manager    - This tool is used to manage the Kingdom CLI.

### configure 
**Description**: 
 

Example: 

 
    
    kingdom cli configure  
    
### reconfigure 
**Description**: 
 

Example: 

 
    
    kingdom cli reconfigure  
    
### ascii-art 
**Description**: 
 Set ascii displayed

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--display` | `-d` | Hide ascii-castle | optional |  |
Example: 

 
    
    kingdom cli ascii-art  
    
---
---
## Module: Analytics <div id="analytics"></div>
**Description**: 
 📈 Analytics manager

### start 
**Description**: 
 Starting Analytics module

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom analytics start  
    
### stop 
**Description**: 
 Stopping Analytics module

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom analytics stop  
    
---
---
## Module: Core <div id="core"></div>
**Description**: 
 🖤 Kingdom Core           - This is the core of Kingdom CLI

Alias: `c`

### start 
**Description**: 
 Start Kingdom dependencies

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom core start  
    
### stop 
**Description**: 
 Stop Kingdom dependencies

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom core stop  
    
### purge 
**Description**: 
 Purge Kingdom dependencies

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom core purge  
    
### configure 
**Description**: 
 Configure Kingdom cli

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom core configure  
    
### reconfigure 
**Description**: 
 Reconfigure Kingdom cli

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom core reconfigure  
    
---
---
## Module: Infra <div id="infra"></div>
**Description**: 
 🧱 Infrastructure manager - This tool helps you to manage your infrastructure

Alias: `i`

### mount 
**Description**: 
 Mount Bleexo infrastructure

Alias: `m`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra mount  --env <env>
    
### start 
**Description**: 
 Start Bleexo infrastructure

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
| `--force-recreate` |  | Recreate containers even if their configuration and image haven't changed. | optional |  |
Example: 

 
    
    kingdom infra start  --env <env>
    
### unmount 
**Description**: 
 Unmount Bleexo infrastructure

Alias: `um`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra unmount  --env <env>
    
### stop 
**Description**: 
 Stop Bleexo infrastructure

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra stop  --env <env>
    
### refresh 
**Description**: 
 Refresh Bleexo infrastructure

Alias: `r`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra refresh  --env <env>
    
### pull 
**Description**: 
 Pull Bleexo infrastructure

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Specify environment | required | `develop` |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra pull  --env <env>
    
### restart 
**Description**: 
 Restart Bleexo infrastructure

Alias: `rs`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra restart  
    
### prune 
**Description**: 
 Prune all stopped infrastructure

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra prune  
    
### purge 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra purge  
    
### list 
**Description**: 
 List all running container

Alias: `ls`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--all` | `-a` | List all container | optional |  |
Example: 

 
    
    kingdom infra list  
    
### configure 
**Description**: 
 

Example: 

 
    
    kingdom infra configure  
    
### compose:up 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--files` | `-f` | List of files to compose up | required |  |
| `--force-recreate` |  | Force to recreate applications | optional |  |
| `--no-recreate` |  | Force to not recreate applications  | optional |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra compose:up  --files <files>
    
### environment 
**Description**: 
 Infrastructure environments manager

Alias: `env`

#### list 
**Description**: 
 List environment configurations

Alias: `ls`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra environment list  
    
#### create 
**Description**: 
 

Alias: `c`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of environment | required |  |
| `--verbose` |  | Display all logs | optional |  |
| `--force` | `-F` | Force erase existing env configuration | optional |  |
Example: 

 
    
    kingdom infra environment create  --name <name>
    
#### import 
**Description**: 
 

Alias: `i`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--file` | `-f` | Filepath of imported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
| `--force` | `-F` | Force erase of existing env configuration | optional |  |
Example: 

 
    
    kingdom infra environment import  --file <file>
    
#### export 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--file` | `-f` | Filepath of exported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra environment export  --name <name> --file <file>
    
#### remove 
**Description**: 
 

Alias: `rm`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom infra environment remove  --name <name>
    
---
---
## Module: Dashboard <div id="dashboard"></div>
**Description**: 
 👀 Dashboard manager

Alias: `dash`

### configure 
**Description**: 
 Configure Dash module

Alias: `cfg`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--gitlab-token` | `-T` | Gitlab access token (scope:api) | required |  |
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom dashboard configure  --gitlab-token <gitlab-token>
    
### start 
**Description**: 
 Starting Dash module

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom dashboard start  
    
### stop 
**Description**: 
 Stopping Dash module

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom dashboard stop  
    
---
---
## Module: Jwt <div id="jwt"></div>
**Description**: 
 🎰 Token manager          - This tool is used to generate  JWT tokens.

### generate 
**Description**: 
 Generate jwt for specific user

Alias: `g`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | specify environment | required | `develop` |
| `--secret` | `-s` | specify secret (overrule --env) | required |  |
| `--clip` | `-c` | copy the jwt to your clipboard | optional |  |
| `--uid` | `-u` | user id | required |  |
| `--cid` | `-c` | company id | required |  |
| `--verbose` | `-v` | specifies verbose mode | optional |  |
Example: 

 
    
    kingdom jwt generate  --env <env> --secret <secret> --uid <uid> --cid <cid>
    
### add-secret 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name your secret | required |  |
| `--secret` | `-s` | Your secret value | required |  |
| `--force` |  | force to override secret value | optional |  |
Example: 

 
    
    kingdom jwt add-secret  --name <name> --secret <secret>
    
### environment 
**Description**: 
 JWT environments manager

Alias: `env`

#### list 
**Description**: 
 List environment configurations

Alias: `ls`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom jwt environment list  
    
#### create 
**Description**: 
 

Alias: `c`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name your secret | required |  |
| `--secret` | `-s` | Your secret value | required |  |
| `--force` |  | force to override secret value | optional |  |
Example: 

 
    
    kingdom jwt environment create  --name <name> --secret <secret>
    
#### import 
**Description**: 
 

Alias: `i`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--file` | `-f` | Filepath of imported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
| `--force` | `-F` | Force erase of existing env configuration | optional |  |
Example: 

 
    
    kingdom jwt environment import  --file <file>
    
#### export 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--file` | `-f` | Filepath of exported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom jwt environment export  --name <name> --file <file>
    
#### remove 
**Description**: 
 

Alias: `rm`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom jwt environment remove  --name <name>
    
---
---
## Module: Postgres <div id="postgres"></div>
**Description**: 
 🦣 Postgres DB manager    - This tool is used to manage Postgres databases

Alias: `pg`

### start 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Specifies verbose mode | optional |  |
Example: 

 
    
    kingdom postgres start  
    
### stop 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--versbose` |  | Specifies verbose mode | optional |  |
Example: 

 
    
    kingdom postgres stop  
    
### dump 
**Description**: 
 Extract a PostgreSQL database into an archive file

Alias: `d`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | specify environment | required | `staging` |
| `--host` | `-h` | specify host (overrule --env) | required |  |
| `--port` | `-p` | specify port (overrule --env) | required |  |
| `--username` | `-U` | specify username (overrule --env) | required |  |
| `--password` | `-P` | specify password (overrule --env) | required |  |
| `--dbname` | `-d` | specify db (overrule --env) | required |  |
| `--file` | `-f` | send output to the specified file | required |  |
| `--verbose` | `-v` | specifies verbose mode | optional |  |
Example: 

 
    
    kingdom postgres dump  --env <env> --host <host> --port <port> --username <username> --password <password> --dbname <dbname> --file <file>
    
### restore 
**Description**: 
 Restore a PostgreSQL database from an archive file

Alias: `r`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | specify environment | required | `develop` |
| `--host` | `-h` | specify host (overrule --env) | required |  |
| `--port` | `-p` | specify port (overrule --env) | required |  |
| `--username` | `-U` | specify username (overrule --env) | required |  |
| `--password` | `-P` | specify password (overrule --env) | required |  |
| `--dbname` | `-d` | specify db (overrule --env) | required |  |
| `--format` |  | Specify source from input file like 'clever-cloud' | required |  |
| `--file` | `-f` | specifies the location of the archive file | required |  |
| `--verbose` | `-v` | specifies verbose mode | optional |  |
Example: 

 
    
    kingdom postgres restore  --env <env> --host <host> --port <port> --username <username> --password <password> --dbname <dbname> --format <format> --file <file>
    
### anonymize 
**Description**: 
 Anonymize a PostgreSQL database

Alias: `a`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | specify environment | required | `staging` |
| `--host` | `-h` | specify host (overrule --env) | required |  |
| `--port` | `-p` | specify port (overrule --env) | required |  |
| `--username` | `-U` | specify username (overrule --env) | required |  |
| `--password` | `-P` | specify password (overrule --env) | required |  |
| `--dbname` | `-d` | specify db (overrule --env) | required |  |
| `--verbose` | `-v` | specifies verbose mode | optional |  |
Example: 

 
    
    kingdom postgres anonymize  --env <env> --host <host> --port <port> --username <username> --password <password> --dbname <dbname>
    
### clear 
**Description**: 
 Delete all data in database

Alias: `c`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom postgres clear  
    
### restart 
**Description**: 
 Restart database

Alias: `rs`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
| `--force` |  | Force to remove container if it's not created via kingdom cli to recreate it | optional |  |
Example: 

 
    
    kingdom postgres restart  
    
### status 
**Description**: 
 

Example: 

 
    
    kingdom postgres status  
    
### environment 
**Description**: 
 Pg environments manager

Alias: `env`

#### list 
**Description**: 
 List environment configurations

Alias: `ls`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom postgres environment list  
    
#### create 
**Description**: 
 

Alias: `c`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--env` | `-e` | Name your secret | required |  |
| `--host` | `-h` | Host db value | required |  |
| `--port` | `-p` | Port db value | required |  |
| `--username` | `-u` | Username to connect to the db | required |  |
| `--password` | `-P` | User password | required |  |
| `--dbname` | `-d` | Database name | required |  |
| `--force` |  | force to override secret value | optional |  |
Example: 

 
    
    kingdom postgres environment create  --env <env> --host <host> --port <port> --username <username> --password <password> --dbname <dbname>
    
#### import 
**Description**: 
 

Alias: `i`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--file` | `-f` | Filepath of imported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
| `--force` | `-F` | Force erase of existing env configuration | optional |  |
Example: 

 
    
    kingdom postgres environment import  --file <file>
    
#### export 
**Description**: 
 

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--file` | `-f` | Filepath of exported env configuration | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom postgres environment export  --name <name> --file <file>
    
#### remove 
**Description**: 
 

Alias: `rm`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--name` | `-n` | Name of the env to export | required |  |
| `--verbose` |  | Display all logs | optional |  |
Example: 

 
    
    kingdom postgres environment remove  --name <name>
    
---
---
## Module: Project-manager <div id="project-manager"></div>
**Description**: 
 📦 Project manager        - This is a command line tool for managing projects

Alias: `pm`

### create 
**Description**: 
 Create a bleexo nodejs project from template

Alias: `c`

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--project-type` | `-T` | Type of your new project | required |  |
| `--project-name` | `-N` | Name of your new project | required |  |
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom project-manager create  --project-type <project-type> --project-name <project-name>
    
### list 
**Description**: 
 List all bleexo projects

Alias: `ls`

Example: 

 
    
    kingdom project-manager list  
    
---
---
## Module: Version-manager <div id="version-manager"></div>
**Description**: 
 🧭 Version manager        - This tool is used to update the version of this cli.

Alias: `vm`

### update 
**Description**: 
 Update Kingdom to latest version.

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom version-manager update  
    
### use 
**Description**: 
 Switch to a specific Kingdom version.

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `version` |  |  | required |  | | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom version-manager use <version> 
    
### pull 
**Description**: 
 Pull Kingdom versions

#### Arguments
| Nom | Alias | Description | Optionnelle | Valeur par défaut | Exemple | 
| ---- | ----- | ----------- | ----------- | --------------- | ----------- | 
| `--verbose` |  | Display all logs | optional | `false` |
Example: 

 
    
    kingdom version-manager pull  
    
### list 
**Description**: 
 List all Kingdom available versions

Alias: `ls`

Example: 

 
    
    kingdom version-manager list  
    

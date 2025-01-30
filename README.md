# TypeScript Next


# 1. Sanity Schema Extraction & Type Generation  
This guide provides commands for extracting schemas and generating TypeScript types in your Sanity project.  

## 📌 Extracting Schemas  
Run the following command to extract your schemas into a JSON file:  

```sh
npx sanity@latest schema extract --path=./sanity/extract.json
```  

## 🛠 Generating Type Definitions  
1. Create a `sanity-typegen.json` file in the root folder.  
2. Run the command below to generate TypeScript types:  

```sh
npx sanity@latest typegen generate
```  

⚡ **Note:** If you add new schemas, rerun the command above to update `/sanity/types.ts`.  
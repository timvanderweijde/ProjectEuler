import { writeFile } from 'fs';
import { promisify } from 'util';

const writeFileAsync = promisify(writeFile);

// Function to save the number array to a file, each number on a new line
export async function saveArrayToFile(arr: number[], filePath: string): Promise<void> {
  try {
    const data = arr.join('\n');
    await writeFileAsync(filePath, data, 'utf8');
    console.log('File saved successfully.');
  } catch (error) {
    console.error('Error saving file:', error);
  }
}

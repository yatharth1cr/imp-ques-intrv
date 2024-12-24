# Longest Compounded Words Finder


Identifies the longest and second-longest compounded words from a text file.

## Features

- Reads a word list (`Input_02.txt`).
- Checks if words are formed by combining smaller words.
- Outputs the top two longest compounded words and time taken.

## How It Works

1. **Input:**
   Words from a text file.

2. **Logic:**
   Splits each word into prefixes and suffixes, checks combinations using Set and memoization.

3. **Output:** Prints results.

## How to Run

1. Install Node.js.

2. Place Input_02.txt in the same folder.

3. Run:

   ```bash
   node script.js
   ```

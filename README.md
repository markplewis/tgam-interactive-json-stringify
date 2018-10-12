This tiny Node app reads the contents of an HTML file, runs it through `JSON.stringify()`, then saves the result as a JSON file. The file name (which should be an ARC UUID) must be provided as a command line argument. For example:

```
node index.js WGUBCMMQCRA5HPX7YJQ2KWCW3Y
```

In the above example, a file named `WGUBCMMQCRA5HPX7YJQ2KWCW3Y.html` would need to exist in the `files` directory.

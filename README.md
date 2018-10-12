This tiny utility reads the contents of an HTML file, runs it through `JSON.stringify()`, then saves the result as a JSON file. The file name (which should be an Ellipsis UUID) must be provided as a command line argument. For example:

```
node index.js WGUBCMMQCRA5HPX7YJQ2KWCW3Y
```

In the above example, a file named `files/WGUBCMMQCRA5HPX7YJQ2KWCW3Y.json` would be generated (assuming that `files/WGUBCMMQCRA5HPX7YJQ2KWCW3Y.html` exists).

A `content` attribute will be created to house the JSON-stringified HTML:

```
{
  "content": "<html>...</html>"
}
```

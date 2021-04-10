## Dark mode

```jsx
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
```

Inside the component

```jsx
const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); //If true dark mode gets applied

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: prefersDarkMode ? "dark" : "light",
      },
    }),
  [prefersDarkMode]
);
```
Inside the return statement
```jsx
      <ThemeProvider theme={theme}>
        <CssBaseline /> ----- FOR DARK MODE */
          <MaterialTable>....
```



          /**
           * rowData: bib,first_name,...,judge5,tableData
           * columnDef: title,field,cellStyle,tableData
           */
# Gist App

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173/) to view it in the browser. 


**Minor detail why i went with following architecture**

- We could have used redux for statemanagment but that would have overkill for this app. useReducer can be good alternative to manage complex state rather using useState.

- There were no layout instructions available so i went with my own design/layout

`Folder Structure and Important files`

```

src
│── app
│    └── components //each component have css file with it
│    └── utilities
│    └── app.css
│    └── App.js
└── main.jsx
```

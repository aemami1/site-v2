// Entry point. Import order matters: globals must be set before any
// component module evaluates `const { useState } = React;` at its top.
import "./globals.js";
import "./data.js";
import "./home.jsx";
import "./pages.jsx";
import "./app.jsx";

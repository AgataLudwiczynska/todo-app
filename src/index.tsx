import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import Polish from "./languages/pl.json";
import English from "./languages/en.json";

const locale = navigator.language;

let lang;
if (locale === "pl-PL") {
	lang = Polish;
} else {
	lang = English;
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<IntlProvider locale={locale} messages={lang}>
			<App />
		</IntlProvider>
	</React.StrictMode>
);

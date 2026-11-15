# CSS Clip-path Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-clip-path-animation-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete runnable recreation of the 34.47-second screen recording.

## Eight effects

1. Circle reveal
2. Hexagon pulse
3. Star spin
4. Diamond breathe
5. Diagonal sweep
6. Curtain drop
7. Iris open
8. Venetian blinds

The page includes a tabbed selector, animated visual preview, and the corresponding CSS snippet for each effect. The image artwork is included locally as SVG files, so the project works offline and does not depend on remote image URLs.

## CSS values and patterns read from the recording

- Circle: `circle(12% at 50% 50%)`, animated to `circle(75% at 50% 50%)`, 3s ease-in-out alternate.
- Hexagon: `polygon(...)`, 3s ease-in-out.
- Star: `starSpin 4s linear infinite`.
- Diamond: `diamondBreathe 3s ease-in-out infinite`.
- Diagonal sweep: `diagSweep 2.5s ease-in-out`.
- Curtain: `inset(0 0 100% 0)` to `inset(0 0 0 0)`.
- Iris: `ellipse(5% 5% at 50% 50%)` to `ellipse(72% 72% at 50% 50%)`.
- Venetian blinds: multi-point `polygon(...)` clip path.

## Run locally

No dependencies or build step required.

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Structure

```text
css-clip-path-animation/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── ocean.svg
    ├── forest.svg
    ├── sunset.svg
    ├── city.svg
    ├── gold.svg
    ├── aurora.svg
    ├── galaxy.svg
    └── desert.svg
```

## Accuracy note

The effect names, visible CSS properties, timing values and several keyframe shapes were transcribed from the screen recording where legible. The full interface, SVG artwork and remaining implementation are reconstructed as a self-contained working project; this is not the original creator's verbatim source repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)

# autofill_noitu.fun (v1.0.0)

[](https://github.com)
[](https://github.com/SuperMonster003/AutoJs6)
[](https://github.com/autox-community/AutoX)
[](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino)
[](https://github.com/duyet/vietnamese-wordlist)
[License](https://www.google.com/search?q=LICENSE)

An autonomous real-time screen scanning, question parsing, and auto-filling assistant for the **Vua Tiếng Việt (King of Vietnamese)** game on [noitu.fun](https://www.noitu.fun/) and other Vietnamese word puzzle games on Android.

Powered by Android **Accessibility Services** via [AutoJs6](https://github.com/SuperMonster003/AutoJs6) or [AutoX.js](https://github.com/autox-community/AutoX), **requiring no root privileges, zero camera usage, and no battery-draining screen capture recordings**.

## Key Highlights

* **Full Support for All 4 Game Modes in Vua Tiếng Việt / noitu.fun**:
  * **🎟️ Vá từ (Fill-in-the-Blank)**: Automatically detects missing letter masks (such as `n a _   c _ _`). If multiple candidate words match initially (e.g., *nam cực* vs. *nam cao*), the floating overlay holds state. As soon as the definition hint appears at second 13, the engine scores contextual keywords and automatically populates the exact answer.
  * **🧩 Ghép chữ (Anagram Unscramble)**: Groups horizontal letter tiles in the center area (even when an open soft keyboard pushes elements upward) while filtering out background decorative glyphs, reconstructing valid 2-syllable Vietnamese words (e.g., `[o][T][á][u][ế][t]` → `TẾU TÁO`, `[o][ẽ][đ][ẽ][o][L]` → `LẼO ĐẼO`).
  * **🚨 Cảnh sát chính tả (Spelling Police)**: Automatically identifies 4- or 6-option spelling candidate clusters using a Phonetic Skeleton clustering algorithm, filters out phonotactically invalid syllables, and performs precise coordinate taps (`click(x, y)`) on the correctly spelled button (e.g., selecting `LÙNG BẮT`).
  * **🔗 Nối từ (Word Chain)**: Automatically chains the trailing syllable of the target word, ranking natural everyday vocabulary at the top to prevent obscure or rejected dictionary entries.
* **8,152 Built-in Offline 2-Syllable Compounds + Viet74K Sync**: Includes an embedded, curated dictionary of 8,152 verified Vietnamese compound and reduplicative words spanning A through Y, complemented by background synchronization with the open [Viet74K](https://github.com/duyet/vietnamese-wordlist) lexicon when connected to the internet.
* **Crash-Free Floating Overlay (Safe Background Worker)**: Decouples screen parsing and touch dispatching into an asynchronous background thread (`threads.start`), allowing users to tap candidate buttons `[1] [2] [3]` without causing UI-thread accessibility collisions or app crashes.
* **Smart Keyboard & Noise Rejection**: Bounds scanning regions strictly above active input fields (`Y < editTop`), filtering out virtual keyboard keycaps, Gboard clipboard suggestions, and player chat bubbles.

## Project Structure

```text
├── autofill_noitu.fun.js         # Production script for AutoJs6 / AutoX.js (v1.0.0)
├── viet_ngu_ai.html              # Standalone web training & simulation interface
└── README.md                     # Repository documentation & installation guide
```

## Step-by-Step Installation Guide

### 1. Install Automation Engine on Android
1. Download the latest release `.apk` (such as `universal.apk` or `arm64-v8a.apk`) from [AutoJs6 GitHub Releases](https://github.com/SuperMonster003/AutoJs6/releases) or the [AutoX.js Community Repository](https://github.com/autox-community/AutoX/releases).
2. Install the package on your Android device.
3. For Android 13+: Go to **System Settings → Apps → AutoJs6**, tap the three-dot menu `⋮` in the top right corner, and select **Allow restricted settings**.

### 2. Grant Required Android Permissions
Open AutoJs6 or AutoX.js, slide open the left navigation drawer (`☰`), and enable:
1. **Accessibility Service**: Required for reading on-screen text nodes and dispatching automated inputs and taps.
2. **Floating Window (Display over other apps)**: Required for rendering the status HUD over active games.

### 3. Load the Script into AutoJs6
1. Copy the complete source code from `autofill_noitu.fun.js`.
2. Inside AutoJs6, tap the **`(+)`** button in the bottom right corner → select **New File** → name it `autofill_noitu.fun.js`.
3. Paste the code into the editor and tap the **Save** icon.

### 4. Run & Play
1. Tap the triangular **Run (`▶`)** button. A compact dark floating HUD titled **⚡ autofill_noitu.fun v1.0.0** will appear near the top of your screen.
2. Launch your browser to [noitu.fun](https://www.noitu.fun/) or open your target word puzzle game.
3. As puzzle rounds begin, the floating overlay automatically analyzes game states:
   * **`[Tự điền: BẬT/TẮT]`**: Toggle automatic text injection and coordinate taps.
   * **`[Tự gửi: BẬT/TẮT]`**: Toggle automatic submission button clicks after text insertion.
   * **Candidate Buttons `[1] [2] [3]`**: Instantly tap any candidate to fill or switch words manually without crashing.

## Architecture & Algorithms

* **Phonetic Skeleton Clustering (`khungAmChinhTa`)**: Identifies common Vietnamese spelling confusions by canonicalizing initial consonants (`s/x`, `tr/ch`, `d/gi/r`, `c/k/q`, `g/gh`, `ng/ngh`) and terminal stops (`-t`, `-c`, `-p`) to isolate spelling error clusters in *Cảnh sát chính tả*.
* **Syllable Frequency Ranking (`SYL_FREQ_MAP`)**: In word-chaining mode, candidate continuations are ranked by natural linguistic frequency across Vietnamese literature, prioritizing common words over obscure terms.
* **Delayed Hint Scorer (`chamDiemGoiYVaTu`)**: In blank-filling mode, keyword scoring extracts semantic overlap between in-game definition sentences and dictionary glosses to resolve multiple plausible matches into a single verified answer upon hint appearance.

## Disclaimer

This project is developed solely for educational purposes, software automation research, and linguistic study. The author does not endorse using this tool to disrupt competitive tournaments or compromise fair play.

## License

Distributed under the open-source [MIT License](https://www.google.com/search?q=LICENSE).
#  Stake Mine

**Stake Mine** is a sleek and responsive front-end staking dashboard built with **React** and **Tailwind CSS**. It mimics the user interface of a crypto staking platform, with mining stats, reward visuals, and a smooth user experience — all packaged for static deployment.

---

##  Live Demo

 [View Project Live](https://aryannaik-max.github.io/Stake-Mine/) 

---

##  Features

-  Staking + reward simulation UI
-  Visual mining and progress display
-  Static asset bundling for deployment
-  Tailwind-powered responsive design
- ⚛ Built with React components

---

##  Tech Stack

- **React**
- **Tailwind CSS**
- **Vite** 
- **JSX**

---

##  Getting Started (Development)

### 1. Clone the Repo

```bash
git clone https://github.com/Aryannaik-max/Stake-Mine.git
cd Stake-Mine
```
### 2.Install dependencies
```bash
npm install
```
### 3. Start the development server
```
npm run dev
```
---

##  Known Issues

-  **Withdraw Button Logic Bug**:  
  The `Withdraw` button currently shares the same logic as the `Start` button, which causes:
  - The game state to reset (even if the user just wants to withdraw).
  - The staked amount to be decremented immediately upon clicking withdraw.
  
   **Planned Fix**: Separate the withdraw logic from game initialization. Ensure that withdrawing:
  - Does **not reset** the UI state.
  - Returns the correct staked amount without affecting gameplay stats.

---

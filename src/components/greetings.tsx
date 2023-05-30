'use client'

function getGreeting(): string {
  const date: Date = new Date();
  const hour: number = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else if (hour >= 18 || hour < 22) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

export default () => (
  <p>{getGreeting()}, I am traveller and software engineer from 🇱🇹 Lithuania.</p>
)

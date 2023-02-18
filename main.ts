export type Streak = {
  currentCount: number,
  startDate: string,
  lastLoginDate: string
}

export function dateFormat(date: Date): string {
  return date.toLocaleString('tr-TR')
}

export function streakCounter(_localStorage: Storage, date: Date): Streak {
  return {
    currentCount: 1,
    startDate: dateFormat(date),
    lastLoginDate: dateFormat(date)
  }
}
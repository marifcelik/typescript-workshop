import { describe, it, expect, beforeEach } from 'vitest';
import { streakCounter, dateFormat } from './main';

describe('streakCounter', () => {
    let mockLocalStorage: Storage;

    beforeEach(() => {
        mockLocalStorage = window.localStorage
    });

    it('should return a streak object with currentCount, startDate and lastLoginDate', () => {
        const date = new Date();
        const streak = streakCounter(mockLocalStorage, date);

        expect(streak.hasOwnProperty('currentCount')).toBe(true);
        expect(streak.hasOwnProperty('startDate')).toBe(true);
        expect(streak.hasOwnProperty('lastLoginDate')).toBe(true);
    });

    it('should return a streak starting at 1 and keep track on lastLoginDate', () => {
        const date = new Date();
        const streak = streakCounter(mockLocalStorage, date);
        const formattedDate = dateFormat(date);

        expect(streak.currentCount).toBe(1);
        expect(streak.lastLoginDate).toBe(formattedDate);
    });
})

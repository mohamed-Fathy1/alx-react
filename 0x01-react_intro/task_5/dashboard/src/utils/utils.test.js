import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('test utils', () => {
    it('get current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('get footer content with true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('get footer content with false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    it('get footer content with undefined', () => {
        expect(getFooterCopy()).toBe('Holberton School main dashboard');
    });

    it('get latest notification', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});

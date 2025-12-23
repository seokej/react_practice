export type CalcState = {
    current: string;
    previous: string | null;
    operator: string | null;
    overwrite: boolean;
}

const initialState: CalcState = {
    current: '0',
    previous: null,
    operator: null,
    overwrite: false,
}

const evaluate = (a: string, operator: string, b: string) => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (Number.isNaN(x) || Number.isNaN(y)) return '0';
    switch (operator) {
        case '+': return (x + y).toString();
        case '-': return (x - y).toString();
        case '×':
        case '*': return (x * y).toString();
        case '÷':
        case '/': return y === 0 ? 'Error' : (x / y).toString();
        default: return '0';
    }
}

export const calcFunc = (state: CalcState = initialState, action: { type: string; payload?: string }) => {
    switch (action.type) {
        case '.': {
            if (state.overwrite) {
                return { ...state, current: '0.', overwrite: false };
            }
            if (state.current.includes('.')) return state;
            return { ...state, current: state.current + '.' };
        }
        case 'INPUT': {
            const digit = action.payload || '0';
            if (state.overwrite) {
                return { ...state, current: digit, overwrite: false };
            }
            if (state.current === '0') return { ...state, current: digit };
            return { ...state, current: state.current + digit };
        }
        case 'OPERATOR': {
            const op = action.payload || null;
            if (!op) return state;
            if (state.previous == null) {
                return { ...state, previous: state.current, operator: op, overwrite: true };
            }
            if (state.operator && !state.overwrite) {
                const result = evaluate(state.previous, state.operator, state.current);
                return { ...state, previous: result, current: result, operator: op, overwrite: true };
            }
            return { ...state, operator: op, overwrite: true };
        }
        case 'EVALUATE': {
            if (state.operator == null || state.previous == null) return state;
            const result = evaluate(state.previous, state.operator, state.current);
            return { ...state, current: result, previous: null, operator: null, overwrite: true };
        }
        case 'DELETE': {
            if (state.overwrite) return { ...state, current: '0', overwrite: false };
            if (state.current.length <= 1) return { ...state, current: '0' };
            return { ...state, current: state.current.slice(0, -1) };
        }
        case 'RESET':
            return { ...initialState };
        default:
            return state;
    }
}

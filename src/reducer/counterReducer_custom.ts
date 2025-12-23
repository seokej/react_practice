const calc_custom = (state: string, type: string, payload?: string): string => {
    const x = parseFloat(state);
    const y = parseFloat(payload || '0');
    if (Number.isNaN(x) || Number.isNaN(y)) return '0';
    switch (type) {
        case 'increase': 
            console.log('increase called', (x + y).toString());
        return (x + y).toString();
        case 'decrease': return (x - y).toString();
        case 'multiply': return (x * y).toString();
        case 'divide': return y === 0 ? 'Error' : (x / y).toString();
        default: return '0';
    }
}

export const calcFunc_custom = (state: string, action: { type: string; payload?: string }): string => {
    switch (action.type) {
        case '.':
            if (state.includes('.')) return state;
            return state + '.';
        case 'INPUT':
            if (!action.payload) return state;
            if (state === '0') {
                return action.payload === '.' ? '0.' : action.payload;
            }
            return state + action.payload;
        case 'increase':
            if (!action.payload) return state;
            return (parseFloat(state) + parseFloat(action.payload)).toString();
        case 'decrease':
            if (!action.payload) return state;
            return (parseFloat(state) - parseFloat(action.payload)).toString();
        case 'multiply':
            if (!action.payload) return state;
            return (parseFloat(state) * parseFloat(action.payload)).toString();
        case 'divide':
            if (!action.payload) return state;
            if (parseFloat(action.payload) === 0) {
                return 'Error';
            }
            return (parseFloat(state) / parseFloat(action.payload)).toString();
        case 'calc':
            return calc_custom(state, action.type, action.payload);
        case 'delete':
            if (!action.payload) return state;
            return parseFloat(action.payload).toString() === '' ? '0' : parseFloat(action.payload).toString();
        case 'reset':
            return '0';
        default:
            return state;
    }
}
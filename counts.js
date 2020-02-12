import { COUNTER_CHANGE } from './index.js';
export function changeCount(count) {
return {
type: COUNTER_CHANGE,
payload: count
}
}
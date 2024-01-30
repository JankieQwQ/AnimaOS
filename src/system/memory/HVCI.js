/**
 * HVCI - Anima OS
 * Hypervisor Code Integrity
 */
const v8 = require('v8');

function checkMemoryIntegrity() {
	const totalHeapSize = v8.getHeapStatistics()
		.total_available_size;
	const buffer = Buffer.alloc(totalHeapSize);
	const view = new Int32Array(buffer.buffer);

	for (let i = 0; i < view.length; i++) {
		if (view[i] !== 0) {
			return `Memory error detected at index ${i}`;
			return false;
		}
	}

	return 'Memory integrity check passed';
	return true;
}

function checkMemoryValidity() {
	const totalHeapSize = v8.getHeapStatistics()
		.total_available_size;
	const buffer = Buffer.alloc(totalHeapSize);
	const view = new Uint8Array(buffer.buffer);

	for (let i = 0; i < view.length; i++) {
		if (view[i] < 0x20 || view[i] > 0x7E) {
			return false;
		}
	}
	return true;
}
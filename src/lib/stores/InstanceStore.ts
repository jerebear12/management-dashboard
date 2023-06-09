import type { InstanceInfoType } from '$lib/types/InstanceInfoType';
import { writable } from 'svelte/store';

const instance: InstanceInfoType[] = [
    // {
    //     name: "Data-Inst-1",
    //     type: "0",
    //     port: 7000,
    //     metricsPort: 1234,
    //     commandsPort: 8000,
    //     processId: 123432,
    //     exitCode: "0",
    //     isRunning: "true"
    // }
];

function createInstances() {
	const { subscribe, update } = writable(instance);

	return {
		subscribe,
        addOne: (instance: InstanceInfoType) => update(originalList => {
            const instanceInStore = originalList.find(s => s.name === instance.name);
            if (instanceInStore) {
                // Update the instance in the list.
                originalList[originalList.indexOf(instanceInStore)] = instance;
                return originalList;
            }
            // Add instance to the list.
            originalList.push(instance);
            return originalList;
        }),
		deleteOne: (name: string) => update(originalList => {
            const origIndex = originalList.findIndex((s => s.name === name));
            originalList.splice(origIndex, 1);
            return originalList;
        })
	};
}

export const instances = createInstances();
import {
    watch,
} from 'turbowatch';

import { dirname } from 'node:path';

void watch({
    debounce: { wait: 0 },
    project: dirname(new URL(import.meta.url).pathname),
    triggers: [
        {
            name: 'reload-on-rebuild',
            expression: [
                'allof',
                ['not', ['dirname', 'node_modules']]
            ],
            initialRun: true,
            persistent: false,
            // interruptible: true,
            throttleOutput: { delay: 0 },
            onChange: async ({ spawn }) => {
                console.log('restarting');
            },
            retry: { retries: 0 }
        },
    ]
});
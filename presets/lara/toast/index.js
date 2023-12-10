export default {
    root: ({ props }) => ({
        class: ['w-96 rounded-md', { '-translate-x-2/4': props.position == 'top-center' || props.position == 'bottom-center' }]
    }),
    container: ({ props }) => ({
        class: [
            'my-4 rounded-md w-full',
            'border-solid border-0 border-l-[6px]',
            'backdrop-blur-[10px] shadow-md',
            console.log(props),
            // Colors
            {
                'bg-blue-100/70 dark:bg-blue-500/20': props.message.severity == 'info',
                'bg-green-100/70 dark:bg-green-500/20': props.message.severity == 'success',
                'bg-orange-100/70 dark:bg-orange-500/20': props.message.severity == 'warn',
                'bg-red-100/70 dark:bg-red-500/20': props.message.severity == 'error'
            },
            {
                'border-blue-500 dark:border-blue-400': props.message.severity == 'info',
                'border-green-500 dark:border-green-400': props.message.severity == 'success',
                'border-orange-500 dark:border-orange-400': props.message.severity == 'warn',
                'border-red-500 dark:border-red-400': props.message.severity == 'error'
            },
            {
                'text-blue-700 dark:text-blue-300': props.message.severity == 'info',
                'text-green-700 dark:text-green-300': props.message.severity == 'success',
                'text-orange-700 dark:text-orange-300': props.message.severity == 'warn',
                'text-red-700 dark:text-red-300': props.message.severity == 'error'
            }
        ]
    }),
    content: {
        class: 'flex items-start p-4'
    },
    icon: {
        class: [
            // Sizing and Spacing
            'w-6 h-6',
            'text-lg leading-none mr-2 shrink-0'
        ]
    },
    text: {
        class: [
            // Font and Text
            'text-base leading-none',
            'ml-2',
            'flex-1'
        ]
    },
    summary: {
        class: 'font-bold block'
    },
    detail: {
        class: 'mt-2 block'
    },
    closebutton: {
        class: [
            // Flexbox
            'flex items-center justify-center',

            // Size
            'w-8 h-8',

            // Spacing and Misc
            'ml-auto  relative',

            // Shape
            'rounded-full',

            // Colors
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:bg-surface-0/50 dark:hover:bg-surface-0/10',

            // Misc
            'overflow-hidden'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
        enterActiveClass: 'transition-transform transition-opacity duration-300',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
    }
};

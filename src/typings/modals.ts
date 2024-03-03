export type TModalConfig = {
    title: string,
    firstButton: {
        title: string,
        onClick: () => void
    },
    secondButton: {
        title: string,
        onClick: () => void
    }
}
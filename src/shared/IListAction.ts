export default interface IListAction {
    tooltip: string
    iconJSX: JSX.Element
    onClick: (userId: string) => void
}

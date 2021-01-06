export default interface IListAction {
    tooltip: string
    iconJSX: JSX.Element
    onClick: (id: string) => void
}

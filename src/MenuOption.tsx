const MenuOption = (props: { name: string }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="m-1">
        {props.name}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};
export { MenuOption };

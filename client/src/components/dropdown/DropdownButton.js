import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: <Link to="/explore/fiction">Fiction</Link>,
  },
  {
    key: "2",
    label: <Link to="/explore/romance">Romance</Link>,
  },
  {
    key: "3",
    label: <Link to="/explore/comic">Comic</Link>,
  },
  {
    key: "4",
    label: <Link to="/explore/textbook">Textbook</Link>,
  },
  {
    key: "5",
    label: <Link to="/explore/crime">Crime</Link>,
  },
];
const DropdownButton = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Space>
      <div className="menuItem">Categories</div>

      <DownOutlined />
    </Space>
  </Dropdown>
);
export default DropdownButton;

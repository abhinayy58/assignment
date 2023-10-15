import React, { ReactNode, useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
interface DrawersProps {
  children: ReactNode;
}

const Drawers: React.FC<DrawersProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Button
        style={{ background: "#001529",position:'absolute',
        right: 0 }}
        type="primary"
        onClick={showDrawer}
      >
        {!open ? <MenuOutlined /> : <CloseOutlined /> }
      </Button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Drawers;

import React, { useState } from "react";

import { Button, Modal } from "antd";
import { theme } from "antd";

import "./style.css";
import { SAMPLE_TEXT } from "./sample";

export const AuthAutomation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showFile = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e: any) => {
      const text = e.target.result;
      setPreviewContent(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  const openSample = () => {
    showModal();
    setPreviewContent(SAMPLE_TEXT);
  };

  return (
    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
      {/* Page 1 */}
      <Button type="primary" onClick={openSample}>
        Click here to view the example input file
      </Button>

      <div className="fileWrapper">
        <input type="file" onChange={showFile} />

        <Button className="button" type="primary" onClick={showModal}>
          Preview
        </Button>
        <Button className="button" type="primary">
          Run
        </Button>

        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>{previewContent}</p>
        </Modal>
      </div>
    </div>
  );
};

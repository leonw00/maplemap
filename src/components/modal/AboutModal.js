import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";

export default function AboutModal ({visible, onClose}) {
  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={onClose}
    >
      <CModalHeader>
        <CModalTitle>About</CModalTitle>
      </CModalHeader>
      <CModalBody>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </CModalBody>
    </CModal>
  );
};


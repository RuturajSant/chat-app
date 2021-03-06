import React, { memo, useCallback } from 'react';
import { Button, Drawer, Alert } from 'rsuite';
import { useParams } from 'react-router';
import { useModalState, useMediaQuery } from '../../../misc/custom-hooks';
import EditableInput from '../../EditableInput';
import { useCurrentRoom } from '../../../context/current-room.context';
import { database } from '../../../misc/firebase';

const EditRoomBtnDrawer = ({getIsRoomDeleted}) => {
  const { isOpen, open, close } = useModalState();
  const { chatId } = useParams();
  const isMobile = useMediaQuery('(max-width: 992px)');

  const name = useCurrentRoom(v => v.name);
  const description = useCurrentRoom(v => v.description);

  const updateData = (key, value) => {
    database
      .ref(`rooms/${chatId}`)
      .child(key)
      .set(value)
      .then(() => {
        Alert.success('Successfully updated', 4000);
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
  };

  const onNameSave = newName => {
    updateData('name', newName);
  };

  const onDescriptionSave = newDesc => {
    updateData('description', newDesc);
  };

  const deleteRoom = useCallback(async () => {
        const roomRef = database.ref(`rooms/${chatId}`);
          // eslint-disable-next-line no-alert
        if (!window.confirm('Delete this room?')){
          return;
        }
    
        try {
          roomRef.remove();  
          getIsRoomDeleted(true);
        } catch (error) {
          Alert.error(error.message, 4000);
        }
      },[chatId,getIsRoomDeleted]);
    
  return (
    <div>
      <Button  size="sm" color="red" onClick={open}>
        Admin Console
      </Button>

      <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit Room</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <EditableInput
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2">Name</h6>}
            emptyMsg="Name can not be empty"
          />
          <EditableInput
            componentClass="textarea"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            emptyMsg="Description can not be empty"
            wrapperClassName="mt-3"
          />
        </Drawer.Body>
        <Drawer.Footer>
          <Button color="red" block onClick={deleteRoom}>
            Delete Room
          </Button>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

export default memo(EditRoomBtnDrawer);

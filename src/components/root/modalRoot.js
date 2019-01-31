import React from 'react';
import { connect } from 'react-redux';
import AddProjectModal from '../project/addProjectModal';
import AddUserModal from '../user/addUserPopUp';
import AddNewStoryPopUp from '../project/AddNewStoryPopUp';


import { MODAL_TYPE_ADD_PROJECT,
        MODAL_TYPE_ADD_NEW_USER,
        MODAL_TYPE_ADD_NEW_STORY
        } from '../../constants/constant';

const MODAL_COMPONENTS = {
    [MODAL_TYPE_ADD_PROJECT]: AddProjectModal,
    [MODAL_TYPE_ADD_NEW_USER]:AddUserModal,
    [MODAL_TYPE_ADD_NEW_STORY]:AddNewStoryPopUp
    
};

const ModalRoot = ({ type, props }) => {
  if (!type) {
    return null;
  }


  const ModalComponent = MODAL_COMPONENTS[type];
  return <ModalComponent {...props} />;
};

export default connect(state => state.modal)(ModalRoot);
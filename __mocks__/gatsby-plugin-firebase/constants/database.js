import AuthConstants from './auth';

const valueEventType = 'value';
const childRemovedEventType = 'child_removed';

const resumesPath = 'resumes';
const usersPath = 'users';
const connectedPath = '.info/connected';

const demoStateResume1Id = 'demo_1';
const demoStateResume2Id = 'demo_2';
const initialStateResumeId = 'initst';

const user1 = {
  uid: AuthConstants.anonymousUser1.uid,
  isAnonymous: AuthConstants.anonymousUser1.isAnonymous,
};
const user2 = {
  uid: AuthConstants.anonymousUser2.uid,
  isAnonymous: AuthConstants.anonymousUser2.isAnonymous,
};

const defaultDelayInMilliseconds = 100;

class Database {
  static get valueEventType() {
    return valueEventType;
  }

  static get childRemovedEventType() {
    return childRemovedEventType;
  }

  static get resumesPath() {
    return resumesPath;
  }

  static get usersPath() {
    return usersPath;
  }

  static get connectedPath() {
    return connectedPath;
  }

  static get demoStateResume1Id() {
    return demoStateResume1Id;
  }

  static get demoStateResume2Id() {
    return demoStateResume2Id;
  }

  static get initialStateResumeId() {
    return initialStateResumeId;
  }

  static get user1() {
    return user1;
  }

  static get user2() {
    return user2;
  }

  static get defaultDelayInMilliseconds() {
    return defaultDelayInMilliseconds;
  }
}

export default Database;

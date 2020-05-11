import React, {Component} from 'react';
import LoginPage from './Components/LoginPage';
// import SettingTemplatePage from './Components/SettingTemplatePage';
import ForgotPage from './Components/ForgotPage';
import ConfirmPage from './Components/ConfirmPage';
import MemPage from './Components/MemPage';
import Transaction from './Components/Transaction';
//import Task from './Components/Task';
import Members from './Components/Members';
//import Accounting from './Components/Accounting';
// import AddTripPage from './Components/AddTripPage';
// import ImportMemberPage from './Components/ImportMemberPage';
// import ConfirmImport from './Components/ConfirmImport';
// import ShareLinkPage from './Components/ShareLinkPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: "",
    }
  }

  render() {
    let {page} = this.state;

    switch(page) {
      // case "trip": 
      // let s = ['profile', 'username', 'privacy'];
      //   return (
      //     <div className='tc flex flex-column'>
      //       <SettingTemplatePage 
      //         avatar="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14264830_372615786419976_2056481598518504979_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=gyeXJCdSTpgAX_XqKVh&_nc_ht=scontent-lax3-1.xx&oh=644a3bfccdd670740976f8ab8617f03a&oe=5EA4E241"
      //         settings={s}
      //         changePage={this.changePage} />
      //     </div>
      //   );

      // case "import":
      //   return (
      //     <ImportMemberPage />
      //   )

      case "mem":
        return (
          <Members />
        );

      // case "sharelink":
      //   return (
      //     <ShareLinkPage 
      //       changePage={this.changePage}
      //     />
      //   )

      // case "confirmImport":
      //   return (
      //       <ConfirmImport
      //         changePage={this.changePage}
      //         groupName='Utah Trip'
      //         ava="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/%27David%27_by_Michelangelo_Fir_JBU013.jpg/165px-%27David%27_by_Michelangelo_Fir_JBU013.jpg"
      //         link="http://pronhup.com"
      //       />
      //   )

      // case "addtrip":
      //   return (
      //     <AddTripPage
      //       changePage={this.changePage}
      //       admin={this.state.user.username}
      //     />
      //   )

      case "confirm":
        return (
          <ConfirmPage 
            changePage={this.changePage}
            email={this.state.email}
          />
        )

      case "memlink":
        return (
          <MemPage 
            changePage={this.changePage}
            group="utah trip"
          />
        )

      case "trans":
        return (
          <Transaction />
        )

      default: 
        return (
          <div className='tc flex flex-column'>
            <LoginPage 
              changePage={this.changePage}
            />
         </div>
        );
    }
  }
}

export default App; 

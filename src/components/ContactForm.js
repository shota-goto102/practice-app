import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
    };
  }
  handleClickSubmit(){
    this.setState({isSubmitted: true});
  }
  handleClickClose(){
    this.setState({isSubmitted: false});
  }
  render() {
    let contactForm;
    if (this.state.isSubmitted){
      contactForm = (
        <div className='lesson-card'>
          <div className='modal'>
            <div className='modal-inner'>
              <div className='modal-header'></div>
              <div className='modal-introduction'>
                <h2>送信しました</h2>
              </div>
              <button className='modal-close-btn' onClick={() => {this.handleClickClose()}}>
                とじる
              </button>
            </div>
          </div>
        </div>
       )
    }else{
      contactForm = (
        <form onSubmit={() => {this.handleClickSubmit()}}>
          <p>メールアドレス（必須）</p>
          <input value={this.state.email} onChange={(event)=>{console.log(event.target.value)}}/>
          <p>お問い合わせ内容（必須）</p>
          <textarea />
          <input
            type='submit'
            value='送信'
          />
        </form>
       )
    }
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;

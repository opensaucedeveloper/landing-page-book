import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import extractProps from '../../helpers/ExtractProps';
import Navbar from '../Navbar/Navbar';
import NavbarNav from '../NavbarNav/NavbarNav';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Link from '../Link/Link';
import Container from '../Container/Container';

/* eslint-disable */
let CodeMirror = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/sass/sass');
}
/* eslint-enable */

class Code extends React.Component {
  constructor(props) {
    super(props);
    const { code, readOnly, languageCode, lineNumbers, showheader, collapsed } = this.props;
    this.state = {
      scode: code,
      sreadOnly: readOnly,
      slanguageCode: languageCode,
      slineNumbers: lineNumbers,
      sshowheader: showheader,
      collapsed,
      hideMessages: collapsed ? 'Show code' : 'Hide code'
    };
    this.updateCode = this.updateCode.bind(this);
    this.toggleReadOnly = this.toggleReadOnly.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.clearCode = this.clearCode.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidMount() {
    /* eslint-disable react/no-string-refs */
    if (this.refs.editor) this.refs.editor.getCodeMirror().refresh();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { readOnly, lineNumbers, languageCode, code, showheader, collapsed } = this.props;

    if (prevProps.readOnly !== readOnly) {
      this.setState({
        sreadOnly: readOnly
      });
    }
    if (prevProps.lineNumbers !== lineNumbers) {
      this.setState({
        slineNumbers: lineNumbers
      });
    }
    if (prevProps.languageCode !== languageCode) {
      this.setState({ slanguageCode: languageCode });
    }
    if (prevProps.code !== code) {
      this.setState({ scode: code }, () => {
        this.refs.editor.getCodeMirror().setValue(code);
      });
    }

    if (prevProps.collapsed !== collapsed) {
      this.setState({ collapsed });
    }

    if (prevProps.showheader !== showheader) {
      this.setState({ sshowheader: showheader });
    }
  }

  updateCode(newCode) {
    this.setState({ scode: newCode, scopied: false }, () => {
      const { updateCode } = this.props;
      updateCode(newCode);
    });
  }

  clearCode() {
    this.setState({ scode: '', scopied: false }, () => {
      const { updateCode } = this.props;
      updateCode('');
      this.refs.editor.getCodeMirror().setValue('');
    });
  }

  toggleReadOnly() {
    const { sreadOnly } = this.state;
    this.setState(
      {
        sreadOnly: !sreadOnly
      },
      () => this.refs.editor.focus()
    );
  }

  copyToClipboard() {
    this.setState({ scopied: true });
  }

  toggleCollapse() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed, hideMessages: !collapsed ? 'Show code' : 'Hide code' });
  }

  render() {
    /* eslint no-script-url: "error" */
    const {
      sreadOnly,
      slanguageCode,
      slineNumbers,
      sshowheader,
      scode,
      scopied,
      collapsed,
      hideMessages
    } = this.state;
    const {
      theme,
      codeLink,
      children,
      collapsible,
      showDeleteButton,
      showCopyButton,
      buttonTextColor
    } = this.props;
    const options = {
      lineNumbers: slineNumbers,
      readOnly: sreadOnly,
      mode: slanguageCode,
      theme
    };
    return (
      <div className="CodeMirror__Container">
        {children && <div className="p-2">{children}</div>}
        {!collapsed && (
          <React.Fragment>
            {sshowheader && (
              <Navbar className="CodeMirror__header" {...extractProps('header', this.props)}>
                <NavbarNav alignItems="right">
                  {codeLink && (
                    <Button className="CodeMirror_btn" {...extractProps('button', this.props)}>
                      <Link href={codeLink} target="_blank" tooltip="Test code">
                        <Icon icon="fa fa-codepen" role="link" textColor={buttonTextColor} />
                      </Link>
                    </Button>
                  )}
                  {showCopyButton && (
                    <CopyToClipboard text={scode} onCopy={this.copyToClipboard}>
                      <Button
                        onClick={this.copyToClipboard}
                        className={`btn ${scopied ? 'disabled' : ''} CodeMirror_btn`}
                        tooltip="Copy"
                        {...extractProps('button', this.props)}
                      >
                        <Icon icon="fa fa-clone" role="link" />
                      </Button>
                    </CopyToClipboard>
                  )}
                  {showDeleteButton && (
                    <Button
                      onClick={this.clearCode}
                      className={`btn ${sreadOnly ? 'disabled' : ''} CodeMirror_btn`}
                      tooltip="Clear"
                      {...extractProps('button', this.props)}
                    >
                      <Icon icon="fa fa-trash-o" />
                    </Button>
                  )}
                </NavbarNav>
              </Navbar>
            )}
            {CodeMirror && (
              <CodeMirror
                ref="editor"
                value={scode}
                onChange={this.updateCode}
                options={options}
                autoFocus
              />
            )}
          </React.Fragment>
        )}
        {collapsible && (
          <Navbar className="CodeMirror__footer" {...extractProps('footer', this.props)}>
            <Container className="text-center">
              <Button
                onClick={this.toggleCollapse}
                className="btn CodeMirror_btn"
                {...extractProps('button', this.props)}
              >
                <Icon icon="fa fa-code" />
                <span className="ml-2">{hideMessages}</span>
              </Button>
            </Container>
          </Navbar>
        )}
      </div>
    );
  }
}

Code.propTypes = {
  /**
   * No allow to change the code
   */
  readOnly: PropTypes.bool,
  /**
   * Define if component is collapsible
   */
  collapsible: PropTypes.bool,
  /**
   * Define if component is collapsed
   */
  collapsed: PropTypes.bool,
  /**
   * Shows line numbers
   */
  lineNumbers: PropTypes.bool,
  /**
   * Shows header bar
   */
  showheader: PropTypes.bool,
  /**
   * Show or hide delete button
   */
  showDeleteButton: PropTypes.bool,
  /**
   * Show or hide copy button
   */
  showCopyButton: PropTypes.bool,
  /**
   * Code to show on component
   */
  code: PropTypes.string.isRequired,
  /**
   * language in which the code is written to embellish the syntax
   */
  languageCode: PropTypes.string,
  /**
   * Theme of code
   */
  theme: PropTypes.string,
  /**
   * Link to code, ex: CodeSandbox, CodePen
   */
  codeLink: PropTypes.string,
  /**
   * Background color of the buttons in the header
   */
  buttonBgColor: PropTypes.string,
  /**
   * Hide or show buttons border
   */
  buttonBorderNone: PropTypes.bool,
  /**
   * Color of the buttons in the header
   */
  buttonTextColor: PropTypes.string,
  /**
   * Paddin top of the buttons in the header
   */
  buttonPaddingTop: PropTypes.string,
  /**
   * Paddin bottom of the buttons in the header
   */
  buttonPaddingBottom: PropTypes.string,
  /**
   * Function to handle the change made in the code.
   */
  updateCode: PropTypes.func,
  /**
   * Array of element to show inside Code
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Code.defaultProps = {
  languageCode: 'javascript',
  collapsible: false,
  collapsed: false,
  theme: 'monokai',
  codeLink: '',
  readOnly: false,
  lineNumbers: true,
  showheader: true,
  showDeleteButton: true,
  showCopyButton: true,
  children: null,
  buttonBgColor: 'dark',
  buttonTextColor: 'warning',
  buttonBorderNone: true,
  buttonPaddingTop: '0',
  buttonPaddingBottom: '0',
  updateCode: () => {}
};

export default Code;

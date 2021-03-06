import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classNames from "classnames";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import injectSheet from "react-jss";
import { Manager, Popper, Target } from "react-popper";

const styles = theme => ({
  topMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  }
});

const hasMenuTitle = ({ node }) => node.frontmatter && node.frontmatter.menuTitle;

class TopMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    let { classes, pages, posts } = this.props;
    const { anchorEl, open } = this.state;
    const targetlist = ["/", "/search/", "/tags/", "/about/"];

    pages = pages.filter(hasMenuTitle);
    const post = posts.find(element => element.node.fields.slug == decodeURI(typeof window !== `undefined` ? window.location.pathname : "hoge"));
    const flag = targetlist.some((v) => v == (typeof window !== `undefined` ? window.location.pathname : "hoge"));

    return (
      <nav className={classes.topMenu}>
        <Manager>
          <Target>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.open}
            >
              <MoreVertIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  {typeof window !== `undefined` && flag &&
                    <MenuList role="menu">
                      <MenuItem
                        onClick={e => {
                          this.props.homeLinkOnClick(e);
                          this.handleClose();
                        }}
                      >
                        Home
                    </MenuItem>
                      {pages.map((page, i) => {
                        const { fields, frontmatter } = page.node;

                        return (
                          <Link
                            aria-label={frontmatter.title}
                            key={fields.slug}
                            to={fields.slug}
                            style={{ display: "block" }}
                          >
                            <MenuItem
                              onClick={e => {
                                this.props.pageLinkOnClick(e);
                                this.handleClose();
                              }}
                            >
                              {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
                            </MenuItem>
                          </Link>
                        );
                      })}
                      {/* <Link aria-label="Contact" to="/contact/" style={{ display: "block" }}>
                      <MenuItem
                        onClick={e => {
                          this.props.pageLinkOnClick(e);
                          this.handleClose();
                        }}
                      >
                        Contact
                      </MenuItem>
                    </Link> */}
                    </MenuList>}
                  {typeof window !== `undefined` && !flag && post !== `undefined` &&
                    <MenuList role="menu">
                      <div dangerouslySetInnerHTML={{
                        __html: post.node.tableOfContents
                      }} />
                    </MenuList>
                  }
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

TopMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  pageLinkOnClick: PropTypes.func.isRequired,
  homeLinkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(TopMenu);

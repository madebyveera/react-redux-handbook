import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const AddTodo = (props) => {
  const { nextTodoId, text, dispatch } = props;
  const [todoText, setTodoText] = React.useState(text);
  return (
    <div className="container">
      <form>
        <div className="form-group m-4">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Add Todo"
              value={todoText}
              onChange={event => setTodoText(event.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => dispatch(addTodo({index: nextTodoId, text: todoText}))}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  nextTodoId: PropTypes.number,
  text: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  nextTodoId: state.todos ? state.todos.length + 1 : 1,
  text: "Use Redux"
});

export default connect(mapStateToProps)(AddTodo);

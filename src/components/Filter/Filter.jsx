import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name <br />
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

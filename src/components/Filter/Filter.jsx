import PropTypes from 'prop-types';
import { Label, Input, Title } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Title>Find contacts by name</Title>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

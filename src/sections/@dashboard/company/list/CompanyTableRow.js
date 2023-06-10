import PropTypes from 'prop-types';
// @mui
import {
  Stack,
  Avatar,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';

// ----------------------------------------------------------------------

CompanyTableRow.propTypes = {
  row: PropTypes.object,
};

export default function CompanyTableRow({ row }) {
  const { name, avatarUrl, company, registry, taxID, address, partner, phoneNumber, creationDate } = row;

  return (
    <TableRow hover>

      <TableCell>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar alt={name} src={avatarUrl} />

          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Stack>
      </TableCell>

      <TableCell align="left">{company}</TableCell>

      <TableCell align="left">{registry}</TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {taxID}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {creationDate}
      </TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {address}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {partner}
      </TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {phoneNumber}
      </TableCell>

    </TableRow>
  );
}

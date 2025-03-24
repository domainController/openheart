// app/config/userBasicInfoFields.ts
const userBasicInfoFields = [
  { name: 'first_name', label: 'First Name', type: 'text' },
  { name: 'last_name', label: 'Last Name', type: 'text' },
  { name: 'romantic_status', label: 'Romantic Status', type: 'select', options: ['Never Married', 'Divorced'] },
  { name: 'username', label: 'Username', type: 'text' },
  { name: 'birth_date', label: 'Birth Date', type: 'date' },
  { name: 'user_id', label: 'User ID', type: 'text' },
  { name: 'sex', label: 'Sex', type: 'select', options: ['Male', 'Female'] },
  { name: 'id_country', label: 'ID Country', type: 'text' },
  { name: 'passport_country', label: 'Passport Country', type: 'text' },
  { name: 'commitment_expectations', label: 'Commitment Expectations', type: 'text' },
  { name: 'ethnicity_origin', label: 'Ethnicity Origin', type: 'text' },
  { name: 'ethnicity_category', label: 'Ethnicity Category', type: 'text' },
  { name: 'current_residence', label: 'Current Residence', type: 'text' },
  { name: 'immigration_status', label: 'Immigration Status', type: 'text' },
  { name: 'hometown_region', label: 'Hometown Region', type: 'text' },
  { name: 'has_children', label: 'Has Children', type: 'checkbox' },
  { name: 'account_nature', label: 'Account Nature', type: 'text' },
];

export default userBasicInfoFields;
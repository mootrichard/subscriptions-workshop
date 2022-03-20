import { TextInput, Button, Paper, useMantineTheme, LoadingOverlay, Group, Anchor } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/hooks';
import { useState } from 'react';

export function EditCustomer({ customer, noPadding, noSubmit, noShadow, style }) {
  const form = useForm({
    initialValues: {
      emailAddress: customer.emailAddress ? customer.emailAddress : '',
      givenName: customer.givenName ? customer.givenName : '',
      familyName: customer.familyName ? customer.familyName : '',
      nickname: customer.nickname ? customer.nickname : '',
      company: customer.company ? customer.company : '',
      phoneNumber: customer.phoneNumber ? customer.phoneNumber : '',
      birthday: customer.birthday ? new Date(customer.birthday) : '',
      referenceId: customer.referenceId ? customer.referenceId : '',
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();
  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  return (
    <Paper
      padding={noPadding ? 0 : 'lg'}
      shadow={noShadow ? null : 'sm'}
      style={{
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...style,
      }}
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <LoadingOverlay visible={loading} />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('emailAddress')}
        />
        <TextInput
          label="Given Name"
          placeholder="Given Name"
          {...form.getInputProps('givenName')}
        />
        <TextInput
          label="Family Name"
          placeholder="Family Name"
          {...form.getInputProps('familyName')}
        />
        <TextInput
          label="Nickname"
          placeholder="Nickname"
          {...form.getInputProps('nickname')}
        />
        <TextInput
          label="Company"
          placeholder='Company'
          {...form.getInputProps('company')}
        />
        <TextInput
          label="Phone Number"
          placeholder='Phone Number'
          {...form.getInputProps('phoneNumber')}
        />
        <DatePicker
          label="Birthday"
          placeholder='Birthday'
          defaultValue={form.getInputProps('birthday').value}
          {...form.getInputProps('birthday')}
        />

        <br/>
        {!noSubmit && (
          <Group position="right" mt="xl">
            <Button style={{float: 'right'}} color="blue" type="submit">
              Save
            </Button>
          </Group>
          )}
      </form>
    </Paper>
  );
}

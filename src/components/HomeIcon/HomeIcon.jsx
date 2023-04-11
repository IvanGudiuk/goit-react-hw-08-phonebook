import css from './HomeIcon.module.css';

export const HomeIcon = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.span}>Phonebook</span> is a powerful and
      user-friendly web application designed to help users easily manage their
      contacts. With its intuitive interface and robust set of features,
      PhoneBook makes it easy to store, organize, and access all your important
      contact information in one convenient location. Whether you're a busy
      professional who needs to stay in touch with colleagues, a student looking
      to keep track of classmates and professors, or just someone who wants to
      stay connected with friends and family, PhoneBook is the perfect tool for
      you. With PhoneBook, you can add new contacts with just a few clicks, or
      import them from your existing address book. You can also edit and update
      contact information, group your contacts into categories for easy access,
      and search for specific contacts quickly and easily. In addition to basic
      contact management features, PhoneBook also offers advanced functionality,
      such as the ability to set reminders for important events, share contacts
      with others, and even integrate with other apps and services. Overall,
      PhoneBook is a comprehensive and versatile tool that can help you
      streamline your contact management process and stay organized and
      connected no matter where you are.
      <div className={css.image}></div>
    </div>
  );
};

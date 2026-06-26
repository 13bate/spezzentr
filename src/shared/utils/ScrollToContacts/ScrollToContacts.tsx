import { useNavigate } from 'react-router'

export const useScrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
	const navigate = useNavigate()
	e.preventDefault()

	// If NOT on home page → navigate
	if (location.pathname !== '/') {
		navigate('/#contacts')
		return
	}

	// Already on home → scroll
	const contactsSection = document.getElementById('contacts')

	if (contactsSection) {
		const headerHeight = 80

		const elementPosition =
			contactsSection.getBoundingClientRect().top + window.scrollY

		window.scrollTo({
			top: elementPosition - headerHeight,
			behavior: 'smooth',
		})
	}
}
